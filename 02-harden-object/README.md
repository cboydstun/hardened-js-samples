# [SES Lockdown and Harden](https://www.npmjs.com/package/ses)

SES introduces the lockdown() function. Calling lockdown() alters the surrounding execution environment, or realm, such that no two programs running in the same realm can observe or interfere with each other until they have been introduced.

SES introduces the harden function. After calling lockdown, the harden function ensures that every object in the transitive closure over property and prototype access starting with that object has been frozen by Object.freeze. This means that the object can be passed among programs and none of those programs will be able to tamper with the surface of that object graph. They can only read the surface data and call the surface functions.