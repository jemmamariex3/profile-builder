'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Projects',
            'UserId', {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            }
        )
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeColumn('Projects', 'UserId');
    }
};
