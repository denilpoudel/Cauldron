const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.findColor = functions.database.ref("/Color/Recieve/{RecieveID}")
    .onCreate((snap, context) => {
      // Grab the current value of what was written to Firestore.
      const original = snap.val();
      console.log(original);
      // Access the parameter `{documentId}` with `context.params`
      functions.logger.log("RGB", context.params.pushId, typeof original);
      const candyStuff = findCandyInfo(original);
      const candyName = candyStuff[0];
      const cals = candyStuff[1];
      const sugar = candyStuff[2];
      // You must return a Promise when performing asynchronous tasks inside
      // a Functions such as
      // writing to Firestore.
      // Setting an 'uppercase' field in Firestore document returns a Promise.
      return snap.ref.parent.parent.child("Send").
          set({Name: candyName, Calories: cals, Sugar: sugar});
    });
exports.findCandy = functions.database.ref("/Color/Recieve/{RecieveID}")
    .onUpdate((change, context) => {
      // Grab the current value of what was written to Firestore.
      const original = change.after.val();
      console.log(original);
      // Access the parameter `{documentId}` with `context.params`
      functions.logger.log("RGB", context.params.pushId, typeof original);
      const candyStuff = findCandyInfo(original);
      const candyName = candyStuff[0];
      const cals = candyStuff[1];
      const sugar = candyStuff[2];
      // You must return a Promise when performing asynchronous tasks inside
      // a Functions such as
      // writing to Firestore.
      // Setting an 'uppercase' field in Firestore document returns a Promise.
      return change.after.ref.parent.parent.child("Send").
          set({Name: candyName, Calories: cals, Sugar: sugar});
    });
/**
 * Figure out the candy based on its color.
 * @param {string} candyN values from the pi.
 * @return {string} the name of the candy.
 */
function findCandyInfo(candyN) {
  const candyInfo = ["", 0, 0];
  const rgb = candyN.split(",");
  if ( rgb[0] >= 200 && rgb[1] <= 16 && rgb[2] <= 16) {
    candyInfo[0]= "Skittles";
    candyInfo[1] = 251;
    candyInfo[2] = 47;
  } else if ( (rgb[0] <= 100) && (rgb[1] >= 102) && (rgb[2] <= 16) ) {
    candyInfo[0] = "Matcha Kit Kat";
    candyInfo[1] = 210;
    candyInfo[2] = 21;
  } else if ( rgb[0] <= 128 && rgb[1] < 128 && rgb[2] < 32 ) {
    candyInfo[0] = "Snickers";
    candyInfo[1] = 280;
    candyInfo[2] = 29;
  } else if ( rgb[0] > 200 && rgb[1] > 200 && rgb[2] > 200 ) {
    candyInfo[0] = "Hershey's Cookies n' Cream";
    candyInfo[1] = 220;
    candyInfo[2] = 33;
  } else if ( rgb[0] > 200 && rgb[1] < 160 && rgb[2] < 60 ) {
    candyInfo[0] = "Reese's Peanut Butter Cup";
    candyInfo[1] = 232;
    candyInfo[2] = 21;
  } else {
    console.log("Candy cannot be determined");
    candyInfo[0] = "Air";
    candyInfo[1] = 0;
    candyInfo[2] = 0;
  }
  return candyInfo;
}
