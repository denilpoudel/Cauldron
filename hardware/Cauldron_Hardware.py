from picamera import PiCamera
import pyrebase
import time
import cv2
import numpy as np
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

trigger_distance = 30

file = ("Cauldron/image.jpg")

config = {
  "apiKey": "AIzaSyA1cWi45ntuAVSJQBJZnRill-CcTN3qC5E",
  "authDomain": "cauldron-29e02.firebaseapp.com",
  "databaseURL": "https://cauldron-29e02-default-rtdb.firebaseio.com/",
  "storageBucket": "cauldron-29e02.appspot.com"
}

def init_camera():
    global camera
    camera = PiCamera()
    camera.resolution = (1280,720)
    camera.contrast = 10
    print("Camera Initialized")

def init_database():
    firebase = pyrebase.initialize_app(config)
    global db
    db = firebase.database()
    print("Database Connected")

def take_picture():
    camera.capture(file)
    print("Image Captured")
    
def send_data(data):
    db.child("Color").child("Recieve").child("RGB").set(data)
    print("Sent Data")
    
def compute_dominant_color():
    img = cv2.imread(file,cv2.IMREAD_UNCHANGED)
    data = np.reshape(img, (-1,3))
    data = np.float32(data)
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 1.0)
    flags = cv2.KMEANS_RANDOM_CENTERS
    compactness,labels,centers = cv2.kmeans(data,1,None,criteria,10,flags)

    x = centers[0]

    data = str(x[2]) + "," + str(x[1]) + "," + str(x[0])
    return data

#####################################

## PINS
GPIO_Trigger = 18
GPIO_Echo = 23
GPIO_redLED = 5
GPIO_greenLED = 6
GPIO_whiteLED = 27
GPIO_whiteLED2 = 22


## DIRECTION
GPIO.setup(GPIO_Trigger, GPIO.OUT) 
GPIO.setup(GPIO_Echo, GPIO.IN)
GPIO.setup(GPIO_redLED, GPIO.OUT)
GPIO.setup(GPIO_greenLED, GPIO.OUT)
GPIO.setup(GPIO_whiteLED, GPIO.OUT)
GPIO.setup(GPIO_whiteLED2, GPIO.OUT)

def distance():
    GPIO.output(GPIO_Trigger, True)
 
    # set Trigger after 0.01ms to LOW
    time.sleep(0.00001)
    GPIO.output(GPIO_Trigger, False)
 
    StartTime = time.time()
    StopTime = time.time()
 
    # save StartTime
    while GPIO.input(GPIO_Echo) == 0:
        StartTime = time.time()
 
    # save time of arrival
    while GPIO.input(GPIO_Echo) == 1:
        StopTime = time.time()
 
    # time difference between start and arrival
    TimeElapsed = StopTime - StartTime
    # multiply with the sonic speed (34300 cm/s)
    # and divide by 2, because there and back
    distance = (TimeElapsed * 34300) / 2
    
    return distance

def turn_on_white():
    GPIO.output(GPIO_whiteLED, True)
    GPIO.output(GPIO_whiteLED2, True)

def turn_off_white():
    GPIO.output(GPIO_whiteLED, False)
    GPIO.output(GPIO_whiteLED2, False)
#####################################

# Setup
init_camera()
init_database()
time.sleep(2)


# Loop

if __name__ == '__main__':
    try:
        while True:
            dist = distance()
            print(dist)
            if distance() < trigger_distance:
                print("Distance")
                turn_on_white()
                time.sleep(3)
                take_picture()
                time.sleep(2)
                data = compute_dominant_color()
                time.sleep(2)
                send_data(data)
                turn_off_white()
            time.sleep(2)
    except KeyboardInterrupt:
        print("Measurement stopped by User")
        GPIO.cleanup()

