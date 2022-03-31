import { createContext, ReactNode } from 'react';

import { User } from './types';
import { generateUser } from './utils';

const user = generateUser();

export const UserContext = createContext<User>(user);

export function UserProvider({ children }: { children: ReactNode }) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
