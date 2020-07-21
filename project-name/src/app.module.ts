import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { ReportsModule } from './reports/reports.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [ReportsModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
