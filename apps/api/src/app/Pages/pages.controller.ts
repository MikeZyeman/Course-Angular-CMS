import { Controller, Get } from '@nestjs/common';

import { PageEntity } from '@course-angular-cms/data';
import { PagesService } from './pages.service';

@Controller('pages')
export class PagesController {

    constructor(private readonly pagesService: PagesService) {}

    @Get('pages')
    getPages(): PageEntity[] {
        return this.pagesService.getPages();
    }
}