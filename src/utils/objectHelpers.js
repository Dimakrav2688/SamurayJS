export const aupdateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    
    return items.map(user => {
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