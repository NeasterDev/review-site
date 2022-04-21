const router = require('express').Router();

const {
    getSingleUser,
    createUser,
    login,
    updateUser,
    deleteUser,
    saveReview,
    updateReview,
    deleteReviews
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
// router.route('/').post(createUser).put(authMiddleware, saveReview);

// router.route('/').put(updateUser).put(authMiddleware, saveReview); //

// router.route('/').delete(deleteUser).put(authMiddleware); //

// router.route('/login').post(login);

// router.route('/me').get(authMiddleware, getSingleUser);

// router.route('/reviews/:reviewId').put(authMiddleware, updateReview); //

// router.route('/reviews/:reviewId').delete(authMiddleware, deleteReviews);

module.exports = router;