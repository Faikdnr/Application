        export declare class Category {
                readonly id : string;
                readonly name : string;
                readonly src : string;
                readonly subCategories : string[];
        }


        export declare class Products{
                readonly id: string;
                readonly image: string;
                readonly images: string[];
                readonly name: string;
                readonly miktar: string;
                readonly fiyat: string;
                readonly fiyatIndirimli?: number;
        }