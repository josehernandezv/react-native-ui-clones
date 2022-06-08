import { faker } from '@faker-js/faker';
import { ImageSourcePropType } from 'react-native';

import { Post, Story, User } from './types';

const reactionsSources = [
    require('./assets/angry.png'),
    require('./assets/care.png'),
    require('./assets/grinning.png'),
    require('./assets/haha.png'),
    require('./assets/like.png'),
    require('./assets/love.png'),
    require('./assets/sad.png'),
    require('./assets/wow.png'),
];

const DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
};

const getSecondsDiff = (timestamp: number) => (Date.now() - timestamp) / 1000;
const getUnitAndValueDate = (
    secondsElapsed: number
): { value: number; unit: string } => {
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
        if (secondsElapsed >= secondsInUnit || unit === 'second') {
            const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
            return { value, unit };
        }
    }
    return { value: 0, unit: 'second' };
};

const getTimeAgo = (timestamp: Date) => {
    const rtf = new Intl.RelativeTimeFormat('en');

    const secondsElapsed = getSecondsDiff(timestamp.getTime());
    const { value, unit } = getUnitAndValueDate(secondsElapsed);
    return rtf.format(value, unit as Intl.RelativeTimeFormatUnit);
};

export function generateUser(): User {
    return {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
    };
}

export function generateStories(): Story[] {
    const stories: Story[] = [];
    for (let i = 0; i < 20; i++) {
        stories.push({
            id: faker.datatype.uuid(),
            user: generateUser(),
            image: faker.image.image(),
        });
    }
    return stories;
}

function getRandomReactions(): ImageSourcePropType[] {
    const reactionsCount = faker.datatype.number({ min: 1, max: 3 });
    const reactions: ImageSourcePropType[] = [];
    for (let i = 0; i < reactionsCount; i++) {
        const reaction = faker.helpers.arrayElement(reactionsSources);
        if (!reactions.includes(reaction)) {
            reactions.push(reaction);
        }
    }
    return reactions;
}

export function generatePost(): Post {
    return {
        id: faker.datatype.uuid(),
        user: generateUser(),
        date: getTimeAgo(faker.date.recent()),
        content: faker.lorem.paragraph(),
        comments: faker.datatype.number(),
        image: faker.image.image(),
        shares: faker.datatype.number(),
        likes: faker.datatype.number(),
        reactions: getRandomReactions(),
    };
}

export function generatePosts(): Post[] {
    const posts: Post[] = [];
    for (let i = 0; i < 20; i++) {
        posts.push(generatePost());
    }
    return posts;
}
