// القائمة المركزية لجميع ملفات وألعاب موقع MAXROW
// عدل هنا مرة واحدة، وتنعكس تلقائياً على العربي والإنجليزي
const siteFiles = [
    // 1. المتاجر (Stores)
    {
        category: "stores",
        nameAr: "ZUKO STORE",
        nameEn: "ZUKO STORE",
        url: "https://www.mediafire.com/file/beeheffny1zfz94/ZukoStore_v4.7_HFW.pkg/file"
    },
    {
        category: "stores",
        nameAr: "PKGI",
        nameEn: "PKGI",
        url: "https://www.mediafire.com/file/msy6vh0ich5dyvv/PKGi_Store_v1.24_By_Drake.pkg/file"
    },
    {
        category: "stores",
        nameAr: "WIKI STORE",
        nameEn: "WIKI STORE",
        url: "https://www.mediafire.com/file/u19205khym4i2vb/Wiki_Store_By_Drake.pkg/file"
    },
    {
        category: "stores",
        nameAr: "VIDEO STORE",
        nameEn: "VIDEO STORE",
        url: "https://www.mediafire.com/file/9btljdlo0a5gwm4/Video_Store_v3.0_By_T3B.pkg/file"
    },
    {
        category: "stores",
        nameAr: "DUCK STORE",
        nameEn: "DUCK STORE",
        url: "https://www.mediafire.com/file/hu8rr3p9yu0jukv/Duck_Store_v1.80_By_Drake.pkg/file"
    },
    {
        category: "stores",
        nameAr: "Soccer Store",
        nameEn: "Soccer Store",
        url: "https://www.mediafire.com/file/ltuxvs48ny9gela/Soccer+Store+-+v1.2+-+By+Batman.pkg/file"
    },
    {
        category: "stores",
        nameAr: "THANOS 12",
        nameEn: "THANOS 12",
        url: "https://www.mediafire.com/file/8lm2yy72ixr9j8z/THANOS_12_Store_v1.00_By_Drake.pkg/file"
    },
    {
        category: "stores",
        nameAr: "Games station",
        nameEn: "Games station",
        url: "Games station"
    },
    {
        category: "stores",
        nameAr: "web store",
        nameEn: "web store",
        url: "https://www.mediafire.com/file/o5ugeqttg2s8me4/Web_Store_v3.30_By_Drake.pkg/file"
    },
    {
        category: "stores",
        nameAr: "Ghost store",
        nameEn: "Ghost store",
        url: "https://www.mediafire.com/file/yg390pw5hf6bhn0/Ghost_Store_v3.00_By_Drake.pkg/file"
    },
    {
        category: "stores",
        nameAr: "FIX STORE HEN",
        nameEn: "FIX STORE HEN",
        url: "https://www.mediafire.com/file/t2efwmj0in758p4/FIX+Hen+4.93+BY+SOPHT+Q.pkg/file"
    },
    {
        category: "stores",
        nameAr: "FIX STORE CFW",
        nameEn: "FIX STORE CFW",
        url: "https://www.mediafire.com/file/gnlesw0mg9z0044/Fix_Stores_CFW_4.92_By_T3B.pkg/file"
    },
    {
        category: "stores",
        nameAr: "FIX Games",
        nameEn: "FIX Games",
        url: "https://www.mediafire.com/file/a4litx02ijcg8u4/PS3_Games_License_By_T3B.pkg/file"
    },

    // 2. البرامج (Programs)
    {
        category: "programs",
        nameAr: "MultiMan HFW",
        nameEn: "MultiMan HFW",
        url: "https://www.mediafire.com/file/2gp9pqwx7vpoq6n/multiMan_v4.84_HFW_By_Drake.pkg/file"
    },
    {
        category: "programs",
        nameAr: "MultiMan CFW",
        nameEn: "MultiMan CFW",
        url: "https://www.mediafire.com/file/g48irkcstggqv0c/multiMan_v4.85_CFW_By_Drake.pkg/file"
    },
    {
        category: "programs",
        nameAr: "WebMan H/C",
        nameEn: "WebMan H/C",
        url: "https://www.mediafire.com/file/9t3z1sgnk2ohyg7/webMAN_MOD_1.47.48_By+Ahmed_T3B.pkg/file"
    },
    {
        category: "programs",
        nameAr: "Apollo H/C",
        nameEn: "Apollo H/C",
        url: "https://www.mediafire.com/file/yrr0ios2r75yars/Apollo_Save_Tool_By_Dark_Space.pkg/file"
    },
    {
        category: "programs",
        nameAr: "YouTube H/C",
        nameEn: "YouTube H/C",
        url: "https://www.mediafire.com/file/avp9rncie200u3w/Youtube.By+Ahmed.pkg/file"
    },
    {
        category: "programs",
        nameAr: "PS3 Unlock hdd space H/C",
        nameEn: "PS3 Unlock hdd space H/C",
        url: "https://www.mediafire.com/file/yk5j7up1dzp2640/Apollo_Save_Tool_v2.00_By_Drake.pkg/file"
    },
    {
        category: "programs",
        nameAr: "ManaGunZ H/C",
        nameEn: "ManaGunZ H/C",
        url: "https://www.mediafire.com/file/uoi7v2abqisbsx3/ManaGunZ_v1.42_Beta_By_Drake.pkg/file"
    },
    {
        category: "programs",
        nameAr: "IRISMAN H/C",
        nameEn: "IRISMAN H/C",
        url: "https://www.mediafire.com/file/0vzyy8r576u6phh/IRISMAN_v4.91_By_Drake.pkg/file"
    },
    {
        category: "programs",
        nameAr: "qDNSm",
        nameEn: "qDNSm",
        url: "https://www.mediafire.com/file/pwf3iqjwrpdamp9/qDNSm-Installer.pkg/file"
    },
    {
        category: "programs",
        nameAr: "DeepPlay",
        nameEn: "DeepPlay",
        url: "https://www.mediafire.com/file/sxtdmrlm4s6nrku/DeepPlay-v3MICHELsw17.pkg/file"
    },

    // 3. الجوائز (Trophies)
    {
        category: "trophies",
        nameAr: "trophi",
        nameEn: "Trophies",
        url: "https://www.mediafire.com/file/lmvrbxq5ribg5t0/PlayStation_III_Trophies_By_Drakr.zip/file"
    },

    // 4. التعريب (Arabization)
    {
        category: "arabization",
        nameAr: "Arabic PS3 HEN 4.93",
        nameEn: "Arabic PS3 HEN 4.93",
        url: "https://www.mediafire.com/file/zrzhxmrxo0klniz/PS3_AR_by_DARK_SPACE_(HEN)__1.00_4%2C93.pkg/file"
    },
    {
        category: "arabization",
        nameAr: "Arabic PS3 CFW 4.92",
        nameEn: "Arabic PS3 CFW 4.92",
        url: "https://www.mediafire.com/file/yd93s12776g9jpf/PS3_AR_by_DARK_SPACE_%2528HEN%2529__1.03.pkg/file"
    },
    {
        category: "arabization",
        nameAr: "English PS3",
        nameEn: "English PS3",
        url: "https://www.mediafire.com/file/mq6y1ysjn7fgbnm/English+ps3+full+hen+4.91+by+PS3+Legends.pkg/file"
    },
    {
        category: "arabization",
        nameAr: "Arabic GTA5",
        nameEn: "Arabic GTA5",
        url: "https://www.mediafire.com/file/lyhicfuvlrltp3e"
    },
    {
        category: "arabization",
        nameAr: "NFS:MW arabic(BULS)",
        nameEn: "NFS:MW Arabic (BULS)",
        url: "https://www.mediafire.com/file/2hp81stgqv1vya7/SKUCONFIG.INI/file"
    },

    // 5. المودات (Mods & DLC)
    {
        category: "mods",
        nameAr: "M, V40.1 GTA5 54",
        nameEn: "James Reborn Mod V40.1 (54)",
        url: "https://www.mediafire.com/file/wzja13yh3u8ymuo/James+reborn+Mod+Loader+v40.1+.zip/file"
    },
    {
        category: "mods",
        nameAr: "M, V40.1 GTA5 07",
        nameEn: "James Reborn Mod V40.1 (07)",
        url: "https://www.mediafire.com/file/q8ho13lj7xaunm2/James+reborn+Mod+Loader+v40.1.rar/file"
    },
    {
        category: "mods",
        nameAr: "Mod, GTA4",
        nameEn: "Mod, GTA4",
        url: "a3lan.html?file=https://www.mediafire.com/file/36okwhvftsuxbg6"
    },
    {
        category: "mods",
        nameAr: "Resident Evil 4 mod Graphics",
        nameEn: "Resident Evil 4 Mod Graphics",
        url: "https://www.mediafire.com/file/qhcivn5d7pf1x19/EBOOT.BIN/file"
    },
    {
        category: "mods",
        nameAr: "DLC NFS:MW",
        nameEn: "DLC NFS:MW",
        url: "https://www.mediafire.com/file/yuxpme4t7u8d17r/UNLOCKS.zip/file"
    },
    {
        category: "mods",
        nameAr: "Mod,GTA SA",
        nameEn: "Mod, GTA SA",
        url: "https://www.mediafire.com/file/p9edqsciwz0lyxk/GTA+SAN+ANDREAS+MOD+MENU+PART+2.pkg/file"
    },
    {
        category: "mods",
        nameAr: "Mod, driver",
        nameEn: "Mod, Driver",
        url: "https://www.mediafire.com/file/5o4nli39puprhxp"
    },
    {
        category: "mods",
        nameAr: "Driver Pass online (EU)",
        nameEn: "Driver Pass Online (EU)",
        url: "https://www.mediafire.com/file/ss1apwynqur37k6/Driver_san_francisco_DLC.pkg/file?dkey=koyzdy8tsvl&r=1529"
    },
    {
        category: "mods",
        nameAr: "Driver Pass online (USA)",
        nameEn: "Driver Pass Online (USA)",
        url: "https://www.mediafire.com/file/26l1hbi7lo6p3bm/Driver_Pass_online_DLC_USA.pkg/file"
    },
    {
        category: "mods",
        nameAr: "skip 4.93",
        nameEn: "4.93 Spoofer",
        url: "https://www.mediafire.com/file/bbkx1t06hiucvtt/4.93_Spoofer_By_VirusMike.pkg/file"
    },

    // 6. الألعاب (Games)
    {
        category: "games",
        nameAr: "PES 2018",
        nameEn: "PES 2018",
        url: "PES2018.html"
    },
    {
        category: "games",
        nameAr: "PES 2024 (Patch)",
        nameEn: "PES 2024 (Patch)",
        url: "PES2024.html"
    },
    {
        category: "games",
        nameAr: "Dragon ball Raging Blast 2",
        nameEn: "Dragon Ball Raging Blast 2",
        url: "DBRB.html"
    },
    {
        category: "games",
        nameAr: "driver SF",
        nameEn: "Driver SF",
        url: "https://www.mediafire.com/file/x2q9o3r9td3w542/BLES00951-[DRIVER%20San%20Francisco].iso"
    },
    {
        category: "games",
        nameAr: "Heavy rain",
        nameEn: "Heavy Rain",
        url: "https://gutampsid.github.io/hrgomf.github.io/"
    },
    {
        category: "games",
        nameAr: "Rocket League",
        nameEn: "Rocket League",
        url: "https://www.mediafire.com/file/lpcmluiwn9z05cj/Espacy+-+Supersonic+Acrobatic+Rocket.pkg/file"
    },
    {
        category: "games",
        nameAr: "metal gear solid 4",
        nameEn: "Metal Gear Solid 4",
        url: "https://www.skzezo.com/2025/02/4-3-metal-gear-solid-4-ps3-arabic.html?m=1"
    },
    {
        category: "games",
        nameAr: "GTA SA",
        nameEn: "GTA SA",
        url: "https://www.mediafire.com/file/i78617zctnhla61/GTA+SAN+ANDREAS+MOD+MENU+PART+1.pkg/file"
    },
    {
        category: "games",
        nameAr: "Resident evil 4 HD arabic",
        nameEn: "Resident Evil 4 HD Arabic",
        url: "https://www.mediafire.com/file/jvl3bi8j4djs8wb/Resident+Evil+4++Arabic.pkg/file"
    },
    {
        category: "games",
        nameAr: "bully arabic",
        nameEn: "Bully Arabic",
        url: "https://akirabox.to/BnkmWVJYrGR0/file"
    },
    {
        category: "games",
        nameAr: "DRIVER 3",
        nameEn: "Driver 3",
        url: "https://www.mediafire.com/file/toywgb1flq90bgw/Driver+3+-+By+SKZEZO.pkg/file"
    },
    {
        category: "games",
        nameAr: "far 6ba5",
        nameEn: "PS2 Classics",
        url: "https://www.mediafire.com/file/c9e48yos19g2g37/PS2_Classics_%255BPS2_Classics%255D_%255BSLUS00000%255D.pkg/file"
    },
    {
        category: "games",
        nameAr: "bee movie",
        nameEn: "Bee Movie",
        url: "https://www.mediafire.com/file/iuu90foyg2s8zi9/Dream+Works+Bee+Movie+[SLUS21622]By+zoro.pkg/file"
    },
    {
        category: "games",
        nameAr: "Minecraft",
        nameEn: "Minecraft",
        url: "Minecraft.html"
    }
];
