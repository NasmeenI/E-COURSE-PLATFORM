export const getuid = function(idToken){
    getAuth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
            const uid = decodedToken.uid;
            return uid;
        })
        .catch((error) => {
            return res.sendStatus(404);
        });
}