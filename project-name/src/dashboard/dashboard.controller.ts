import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  findAll(): any {
    return this.dashboardService.findAll();
    // return "all dashboard!"
  }

  @Get(':id2')
  get() {
    return 'get dashboard with id!';
  }

  @Get(':id') //localhost:3000/dashboard/123
  findOne(@Param('id') id: string) {
    //return "get dashboard with id!"
    return this.dashboardService.find(id);
  }

  @Post()
  create(@Body() dashboard: any) {
    //return "create dashboard!"
    return this.dashboardService.create(dashboard);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dashboard: any) {
    //return "update dashboard!"
    return this.dashboardService.update(id, dashboard);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    //return "delete dashboard!"
     this.dashboardService.delete(id);
     return `removed dashboard by id ${id}`
  }
}
