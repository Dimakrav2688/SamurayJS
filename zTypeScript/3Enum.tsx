enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2] 

console.log(membership)
console.log(membershipReverse)
//membership константа покажет индекс 1,  membershipReverse напрямую обращается к индексу и покажет Premium

////////////
enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)
//покажет именно строку а не индекс. ибо указана строка а не просто базовое число как в 1 блоке примеров.
