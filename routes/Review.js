module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      bookId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      reviewText: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return Review;
  };
  