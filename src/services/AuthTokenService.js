class AuthTokenService {
    static AuthToken() {
        let userToken = localStorage.getItem('currentUser')
                ? JSON.parse(localStorage.getItem('currentUser')).token
                : '';

        return userToken;
    }

    static BearerToken() {
        return `Bearer ${this.AuthToken()}`;
    }
}

export default AuthTokenService;