export const aupdateObjectInArray = (items: any, itemId: any, objPropName: any, newObjProps: any) => {
    
    return items.map((user: any) => {
    if (user[objPropName] === itemId) {
        return { ...user, ...newObjProps }
    }
    return user;
})
}

/* что было в юзер редюсере.
state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                }) */