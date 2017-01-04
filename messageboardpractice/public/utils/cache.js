/**
 * Created by shen on 2016/12/26.
 */
function checkStatus({ resp, json }) {
    //如果返回结果中包含code和message，则认为出错了
    if(resp.status >= 200 && resp.status < 300 && !!! json.message) {
        
    }
}


function FETCH(url, options) {
    return fetch(url, { credentials: 'include', ...options })
        .then(resp => resp.json().then(json => ({resp, json})).catch(error => ({ resp, json: {}, error }))
        )
        .then(checkStatus)
}