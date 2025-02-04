

export const ProductList={
    name:'productList',
    title:'Product List',
    type:'document',
    fields:[
        {
            name:'id',
            title:'product id',
            type:'string'
        },
        {
            name:'productname',
            title:'Product Name',
            type:'string'
        },
        {
            name:'description',
            title:'Product Description',
            type:'text'
        },
        {
            name:'productimg',
            title:'Product Img',
            type:'image'
        },
        {
            name:'price',
            title:'Product price',
            type:'number'
        },
        {
            name:'discount',
            title:'Discount',
            type:'number'
        },
        {
            name:'category',
            title:'Category Name',
            type:'string'
        },
        {
            name:'stock',
            title:'product stock',
            type:'number'
        },
        {
            name:'rating',
            title:'Product Rating',
            type:'number',
            
        },
        {
            name:'reviews',
            title:'Review List',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'tags',
            title:'Product Tags',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'ProductColor',
            title:'Product Color',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'features',
            title:'Product features',
            type:'array',
            of:[{type:'string'}] 
        },
        {
            name: 'dimensions',
            title: 'Dimensions',
            type: 'object',
            fields: [
              {
                name: 'depth',
                title: 'Depth',
                type: 'string',
              },
              {
                name: 'width',
                title: 'Width',
                type: 'string',
              },
              {
                name: 'height',
                title: 'Height',
                type: 'string',
              },
            ],
          },
        {
            name:'ceratedAt',
            title:'Created Data',
            type:'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 30, // Allow selection in 30-minute intervals
                calendarTodayLabel: 'Set to Today',
              },
              initialValue: () => new Date().toISOString(), // Default to the current date and time
        },
         {
            name:'UpdatedAt',
            title:'Updated Data',
            type:'datetime'
        }
       

    ]
}