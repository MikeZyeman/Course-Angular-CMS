import { Injectable } from '@nestjs/common';

import { PageEntity } from '@course-angular-cms/data';

@Injectable()
export class PagesService {

    pages: PageEntity[] = [
        {
            description: "Angular",
            title: "Angular",
            url : "angular"
        },
        {
            description: "React",
            title: "react",
            url : "react"
        },
        {
            description: "Vue",
            title: "vue",
            url : "vue"
        },
        {
            description: "Svelte",
            title: "svelte",
            url : "svelte"
        }
    ]

    getPages(): PageEntity[] {
        return this.pages;
    }
}