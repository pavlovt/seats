// import * as _ from 'lodash';
// import { conf } from './../../app.conf';
import axios from 'axios';
// import { Core } from "./core";
// import { LoadingService } from './loading-service';
// import pace from '../../../assets/js/pace/pace.min';

class Api {

  constructor() {
    this.defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  send(method, url, data, headers, options) {
    // set default options
    options = _.assign({error: true, getAll: false, wait: true, ajax: {}}, options || {});
     
    data = data || {};
    headers = headers ? headers : {};
    headers = _.assign({}, this.defaultHeaders, headers)

    const token = localStorage.getItem('apoc.token');

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    var promise = new Promise((resolve, reject) => { 
      axios({
        url: this.url(url),
        method, headers, data,
        ...options.ajax,
      })
      .then((res) => {
        // this.progress.done();
        // this.conf.progress = false;
        resolve(_.get(options, 'getAll') ? res : res.data);
      },(err) => {

        if (_.get(options, 'error')) {
          this.handleErrors(err);
        }

        reject(err);
      })
    });

    return promise;

  }

  url(url) {
    return conf.server.url + url;
  }

  get(url, query, headers, options) {
    return this.send('GET', url, query, headers, options);
  }

  post(url, data, headers, options) {
    return this.send('POST', url, data, headers, options);
  }

  put(url, data, headers, options) {
    return this.send('PUT', url, data, headers, options);
  }

  patch(url, data, headers, options) {
    return this.send('PATCH', url, data, headers, options);
  }

  remove(url, headers, options) {
    return this.send('DELETE', url, {}, headers, options);
  }

  upload(url, file, headers) {
    
  }

  download(url) {
    
  }

  handleErrors(err) {
    console.log('error!', err)
    const message = _.get(err, 'response.data.error.message') || 'Server Error'
    // setTimeout(() => {        }, 1000)
    msg.error(message)
  }
}

export default new Api()