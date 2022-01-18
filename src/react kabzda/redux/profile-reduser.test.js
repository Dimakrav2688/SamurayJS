import profileReduser, {addPostActionCreator} from './profile-reduser'



test('new post shold be increment', () => {
    // 1.start test data
    let action = addPostActionCreator('it-kamasutra.com')
    let state = {
        postsData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 57 },
            { id: 3, message: "bla bla", likesCount: 57 },
            { id: 4, message: "Dadada", likesCount: 57 },
        ], // это к MyPosts елементам           
    }    
    // 2. action
    let newState = profileReduser ({state}, {action});

    // 3.expectation
    expect(newState.postsData.length).toBe(5);
  });
  