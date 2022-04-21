import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, BookmarksModule,AuthModule],
})
export class AppModule {}
