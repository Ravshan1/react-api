import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
    delete(id: string) {
        delete this.data[this.data.findIndex(item => item.id == id)];
        return `removed report by id ${id}`
    }
    update(id:string, dashboard:any):any{
        let obj=this.data.find(item=>item.id==id)
        obj.name= dashboard.name
        obj.type= dashboard.type

        return obj
    }
    create(dashboard: any) {
        this.data.push(dashboard)
        return dashboard
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

  