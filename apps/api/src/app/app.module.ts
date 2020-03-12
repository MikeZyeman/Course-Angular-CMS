import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagesModule } from './Pages/pages.module';

@Module({
  imports: [
    PagesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
