const mockUserData = {
    username: 'felipenunezpinillos',
    fullName: 'Felipe Nuñez',
    description: 'Hincha del Chelsea FC',
    websiteUrl: 'https://chelsea.com',
    posts: 150,
    followers: 500,
    following: 500
  };
  
  export const fetchUserData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUserData);
      }, 500);
    });
  };
  