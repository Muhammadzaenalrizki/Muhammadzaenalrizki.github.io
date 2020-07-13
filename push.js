const webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BPLqb65fWZ0VfsZHD892IFKavgCpBhe4qiYlygPHEEKfEgDttuMoqJ9VRoDWwf_6OdctYfhw6l7t5H0reQlRATo",
    "privateKey": "UGZufwk_jR7ZHmSALNKNj-a5GNKS81z3f1CVdivwQEg"
};
 
 
webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
const pushSubscription = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/dmdt2FyOPvY:APA91bGCgdHWN5ZO_fxGFAyW35hzgNyjbM6eFsbHXnHrYXAjsVpFRXZxflHyoTycAJ9nKIdp-TjIlFts6w_zl97PYOLVcNPBKsIn1POWDxKnzTUOzyddGiuynqXc-l0Fr0hHmFHdIsIh",
    "keys": {
        "p256dh": "BHySwbYPY9TP5LDkMSnwpOGuo0QUkO4FSjKDGIN628IoAXPP1H2KhaFCN3HHfJbHQz/FD7vXV2Au5HSGvYgVEhw=",
        "auth": "ZMhhZoourY1Ei9jdcIxYKA=="
    }
};
const payload = 'ini notification dari liga inggris';
const options = {
    gcmAPIKey: '705256894337',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);