import { Injectable } from '@nestjs/common';

import { UserEntity } from '@course-angular-cms/data';

@Injectable()
export class PagesService {

    users: UserEntity[] = [
        {
            id: 1,
            name: "Guest",
            password: "guest"
        },
        {
            id: 2,
            name: "User",
            password: "user"
        },
        {
            id: 3,
            name: "Admin",
            password: "admin"
        }
    ]

    getUsers(): UserEntity[] {
        return this.users.map(x => {
            return {
                id: x.id,
                name: x.name,
                password: ""
            }
        });
    }

    
}