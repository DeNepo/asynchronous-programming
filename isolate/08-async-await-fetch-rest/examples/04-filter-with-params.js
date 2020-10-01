'use strict';


/* Related Resources

  You can select data based on it's relationships

  for example:
    all posts made by user 3

*/


const log = labeledLogger('4. Filter with Params');

const fetchWithQueries = async (resourceType, params = []) => {
  let paramsString = '';
  for (const param of params) {
    const key = param[0];
    const value = param[1];
    paramsString = `${paramsString}&${key}=${value}`;
  }

  const encodedParamsString = encodeURI(paramsString);

  const url = `https://jsonplaceholder.typicode.com/${resourceType}?${encodedParamsString}`;
  log(url);

  const response = await fetch(url);
  if (!response.ok || response.status !== 200) {
    throw new Error('response was not ok');
  }

  const data = await response.json();
  return data;
};


const logData = (logMessage) => {
  return (data) => {
    log(logMessage, data);
  };
};



const logUsernameSamantha = logData('/users?username=Samantha');
fetchWithQueries('users', [['username', 'Samantha']])
  .then(data => logUsernameSamantha(data))
  .catch(err => logUsernameSamantha(err));



const logPostsTitle = logData('/posts?title=qui%20est%20esse');
fetchWithQueries('posts', [['title', 'qui est esse']])
  .then(data => logPostsTitle(data))
  .catch(err => logPostsTitle(err));


const logPostsId1Id2 = logData('/posts?id=1&id=2');
fetchWithQueries('posts', [['id', '1'], ['id', '2']])
  .then(data => logPostsId1Id2(data))
  .catch(err => logPostsId1Id2(err));





log('... end of synchronous tasks ...');
