import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
    delete(id: string) {
        throw new Error("Method not implemented.");
    }
    update(id: string, dashboard: any) {
        throw new Error("Method not implemented.");
    }
    create(dashboard: any) {
        return this.data.push(dashboard);
    }
    find(id: string) {
        return this.data.find(item=>item.id==id);
    }
    findAll(): any {
        return this.data;
    }
    private readonly data=[{
            id:'1',
            name:'dashboard1',
            type: 'barchart'
    },
    {
        id:'2',
        name:'dashboard2',
        type: 'linechart'
    }]
}

  