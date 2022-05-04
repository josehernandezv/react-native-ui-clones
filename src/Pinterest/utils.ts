import { faker } from '@faker-js/faker';
import { Dimensions } from 'react-native';

import { Pin, User } from './types';

const width = Dimensions.get('window').width / 2 - 18;

export function generateUser(): User {
    return {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
    };
}

function getRandomHeight(): number {
    return Math.floor(Math.random() * width) + 100;
}

export function generatePin(category: string): Pin {
    return {
        id: faker.datatype.uuid(),
        image: faker.image.unsplash.imageUrl(
            width,
            getRandomHeight(),
            category.toLowerCase()
        ),
        user: generateUser(),
        title: faker.lorem.sentence(),
    };
}

export function generatePins(count: number = 20, category: string): Pin[] {
    const pins: Pin[] = [];

    for (let i = 0; i < count; i++) {
        pins.push(generatePin(category));
    }

    return pins;
}