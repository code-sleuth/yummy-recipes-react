import React from 'react';
export const BASE_URL = 'http://127.0.0.1:5000/';
export const LOGIN_URL = 'auth/login';
export const REGISTER_URL = 'auth/register';
export const Authenticated = isAuthenticated();
export const AuthToken = getAuthenticationToken();


function isAuthenticated() {
    const token = localStorage.getItem('token');
    return token && token.length > 10;
}

function getErrorMessage() {
    const errorMessage = localStorage.getItem('errorMessage');
    return errorMessage;
}

function getAuthenticationToken(){
    return localStorage.getItem('token');
}


