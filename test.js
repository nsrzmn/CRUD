const {Sequelize, DataTypes, json} = require('sequelize');

const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
});

(async () => {
    await sequelize.sync();

    const nasir = await User.create({
        first_name: "Nasir",
        last_name: "Zaman"
    });

    console.log(nasir.toJSON());

    //setting fist name to nsr
    nasir.first_name = "nsr";
    await nasir.save();
    console.log(nasir.toJSON());

    //setting first and last name simultaneously
    nasir.set({
        first_name: "omer",
        last_name: "ali"
    });
    console.log(nasir.toJSON());
    await nasir.save();

    //deleting the record
    //await nasir.destroy();
    //console.log(nasir.toJSON());

    const users = await User.findAll({
        where:{id:1,
        first_name:"omer",
    }
    });
    console.log(users)
})();



