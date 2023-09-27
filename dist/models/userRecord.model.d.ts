import Mongoose from "mongoose";
declare const UserRecords: Mongoose.Model<{
    created: Date;
    achievements: {
        name?: string | undefined;
        image?: string | undefined;
        criteria?: string | undefined;
        looped?: boolean | undefined;
        baseValue?: number | undefined;
        currentValue?: number | undefined;
        totalTitles?: number | undefined;
        achievementType?: string | undefined;
        badgeName?: string | undefined;
        titlesCount?: number | undefined;
    }[];
    recentGames: string[];
    notifications: {
        createdAt: Date;
        title?: string | undefined;
        token?: string | undefined;
        event?: string | undefined;
        read?: boolean | undefined;
    }[];
    games: {
        kpi1: {
            value: number;
            name?: string | undefined;
        };
        kpi2: {
            value: number;
            name?: string | undefined;
        };
        kpi3: {
            value: number;
            name?: string | undefined;
        };
        kpi4: {
            value: number;
            name?: string | undefined;
        };
        kpi5: {
            value: number;
            name?: string | undefined;
        };
        duration: number;
        name?: string | undefined;
        id?: string | undefined;
        qualitativeGame?: number | undefined;
        identifier?: string | undefined;
    }[];
    activities: {
        name?: string | undefined;
        description?: string | undefined;
        completion?: number | undefined;
        value?: number | undefined;
    }[];
    name?: string | undefined;
    email?: string | undefined;
    userId?: string | undefined;
    nftsCount?: number | undefined;
    gameHours?: number | undefined;
}, {}, {}, {}, Mongoose.Document<unknown, {}, {
    created: Date;
    achievements: {
        name?: string | undefined;
        image?: string | undefined;
        criteria?: string | undefined;
        looped?: boolean | undefined;
        baseValue?: number | undefined;
        currentValue?: number | undefined;
        totalTitles?: number | undefined;
        achievementType?: string | undefined;
        badgeName?: string | undefined;
        titlesCount?: number | undefined;
    }[];
    recentGames: string[];
    notifications: {
        createdAt: Date;
        title?: string | undefined;
        token?: string | undefined;
        event?: string | undefined;
        read?: boolean | undefined;
    }[];
    games: {
        kpi1: {
            value: number;
            name?: string | undefined;
        };
        kpi2: {
            value: number;
            name?: string | undefined;
        };
        kpi3: {
            value: number;
            name?: string | undefined;
        };
        kpi4: {
            value: number;
            name?: string | undefined;
        };
        kpi5: {
            value: number;
            name?: string | undefined;
        };
        duration: number;
        name?: string | undefined;
        id?: string | undefined;
        qualitativeGame?: number | undefined;
        identifier?: string | undefined;
    }[];
    activities: {
        name?: string | undefined;
        description?: string | undefined;
        completion?: number | undefined;
        value?: number | undefined;
    }[];
    name?: string | undefined;
    email?: string | undefined;
    userId?: string | undefined;
    nftsCount?: number | undefined;
    gameHours?: number | undefined;
}> & {
    created: Date;
    achievements: {
        name?: string | undefined;
        image?: string | undefined;
        criteria?: string | undefined;
        looped?: boolean | undefined;
        baseValue?: number | undefined;
        currentValue?: number | undefined;
        totalTitles?: number | undefined;
        achievementType?: string | undefined;
        badgeName?: string | undefined;
        titlesCount?: number | undefined;
    }[];
    recentGames: string[];
    notifications: {
        createdAt: Date;
        title?: string | undefined;
        token?: string | undefined;
        event?: string | undefined;
        read?: boolean | undefined;
    }[];
    games: {
        kpi1: {
            value: number;
            name?: string | undefined;
        };
        kpi2: {
            value: number;
            name?: string | undefined;
        };
        kpi3: {
            value: number;
            name?: string | undefined;
        };
        kpi4: {
            value: number;
            name?: string | undefined;
        };
        kpi5: {
            value: number;
            name?: string | undefined;
        };
        duration: number;
        name?: string | undefined;
        id?: string | undefined;
        qualitativeGame?: number | undefined;
        identifier?: string | undefined;
    }[];
    activities: {
        name?: string | undefined;
        description?: string | undefined;
        completion?: number | undefined;
        value?: number | undefined;
    }[];
    name?: string | undefined;
    email?: string | undefined;
    userId?: string | undefined;
    nftsCount?: number | undefined;
    gameHours?: number | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}, Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    collection: string;
}, {
    created: Date;
    achievements: {
        name?: string | undefined;
        image?: string | undefined;
        criteria?: string | undefined;
        looped?: boolean | undefined;
        baseValue?: number | undefined;
        currentValue?: number | undefined;
        totalTitles?: number | undefined;
        achievementType?: string | undefined;
        badgeName?: string | undefined;
        titlesCount?: number | undefined;
    }[];
    recentGames: string[];
    notifications: {
        createdAt: Date;
        title?: string | undefined;
        token?: string | undefined;
        event?: string | undefined;
        read?: boolean | undefined;
    }[];
    games: {
        kpi1: {
            value: number;
            name?: string | undefined;
        };
        kpi2: {
            value: number;
            name?: string | undefined;
        };
        kpi3: {
            value: number;
            name?: string | undefined;
        };
        kpi4: {
            value: number;
            name?: string | undefined;
        };
        kpi5: {
            value: number;
            name?: string | undefined;
        };
        duration: number;
        name?: string | undefined;
        id?: string | undefined;
        qualitativeGame?: number | undefined;
        identifier?: string | undefined;
    }[];
    activities: {
        name?: string | undefined;
        description?: string | undefined;
        completion?: number | undefined;
        value?: number | undefined;
    }[];
    name?: string | undefined;
    email?: string | undefined;
    userId?: string | undefined;
    nftsCount?: number | undefined;
    gameHours?: number | undefined;
}, Mongoose.Document<unknown, {}, {
    created: Date;
    achievements: {
        name?: string | undefined;
        image?: string | undefined;
        criteria?: string | undefined;
        looped?: boolean | undefined;
        baseValue?: number | undefined;
        currentValue?: number | undefined;
        totalTitles?: number | undefined;
        achievementType?: string | undefined;
        badgeName?: string | undefined;
        titlesCount?: number | undefined;
    }[];
    recentGames: string[];
    notifications: {
        createdAt: Date;
        title?: string | undefined;
        token?: string | undefined;
        event?: string | undefined;
        read?: boolean | undefined;
    }[];
    games: {
        kpi1: {
            value: number;
            name?: string | undefined;
        };
        kpi2: {
            value: number;
            name?: string | undefined;
        };
        kpi3: {
            value: number;
            name?: string | undefined;
        };
        kpi4: {
            value: number;
            name?: string | undefined;
        };
        kpi5: {
            value: number;
            name?: string | undefined;
        };
        duration: number;
        name?: string | undefined;
        id?: string | undefined;
        qualitativeGame?: number | undefined;
        identifier?: string | undefined;
    }[];
    activities: {
        name?: string | undefined;
        description?: string | undefined;
        completion?: number | undefined;
        value?: number | undefined;
    }[];
    name?: string | undefined;
    email?: string | undefined;
    userId?: string | undefined;
    nftsCount?: number | undefined;
    gameHours?: number | undefined;
}> & {
    created: Date;
    achievements: {
        name?: string | undefined;
        image?: string | undefined;
        criteria?: string | undefined;
        looped?: boolean | undefined;
        baseValue?: number | undefined;
        currentValue?: number | undefined;
        totalTitles?: number | undefined;
        achievementType?: string | undefined;
        badgeName?: string | undefined;
        titlesCount?: number | undefined;
    }[];
    recentGames: string[];
    notifications: {
        createdAt: Date;
        title?: string | undefined;
        token?: string | undefined;
        event?: string | undefined;
        read?: boolean | undefined;
    }[];
    games: {
        kpi1: {
            value: number;
            name?: string | undefined;
        };
        kpi2: {
            value: number;
            name?: string | undefined;
        };
        kpi3: {
            value: number;
            name?: string | undefined;
        };
        kpi4: {
            value: number;
            name?: string | undefined;
        };
        kpi5: {
            value: number;
            name?: string | undefined;
        };
        duration: number;
        name?: string | undefined;
        id?: string | undefined;
        qualitativeGame?: number | undefined;
        identifier?: string | undefined;
    }[];
    activities: {
        name?: string | undefined;
        description?: string | undefined;
        completion?: number | undefined;
        value?: number | undefined;
    }[];
    name?: string | undefined;
    email?: string | undefined;
    userId?: string | undefined;
    nftsCount?: number | undefined;
    gameHours?: number | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}>>;
export default UserRecords;
