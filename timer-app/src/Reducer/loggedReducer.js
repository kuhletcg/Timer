const logedRediucer = (state = false, action) => {
    switch (actiom.type) {
        case 'SIGN_IN':
            return !state;

            default:
                return state;
    }

};

export default loggedReducer;