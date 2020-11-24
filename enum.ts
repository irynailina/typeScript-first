// Enum - вспомогательная сущность, которая помогает лучше структурировать код, если присутствуют однотипные элементы. Есть 2 типа записи

enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = "VK",
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM
console.log(social);