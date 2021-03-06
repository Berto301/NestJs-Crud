import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, BookmarksModule,AuthModule, PrismaModule],
})
export class AppModule {}
