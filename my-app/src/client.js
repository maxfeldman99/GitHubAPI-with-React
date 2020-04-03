import fetch from 'unfetch';

const checkStatus = response => {
   
    if (response.ok){
        return response;
    }else{
         // creating error
        let error = new Error(response.statusText);
        error.response = response;
        response.json().then(e => {
            error.error = e;

        });
        return Promise.reject(error);
    }
}

export const getAllRepos = () =>
 fetch('https://api.github.com/users/maxfeldman99/repos?sort=created ').then(checkStatus);
