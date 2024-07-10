module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      task_name: {
        type: Sequelize.STRING,
      },
      class: {
        type: Sequelize.STRING,
      },
      dataset_id: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      task_start_time: {
        type: Sequelize.DATE
      },
      next_run_time: {
        type: Sequelize.DATE
      },
      last_run_time: {
        type: Sequelize.DATE
      },
      next_download_file: {
        type: Sequelize.STRING
      },
      last_download_file: {
        type: Sequelize.STRING
      },
      enabled: {
        type: Sequelize.BOOLEAN
      },
      health: {
        type: Sequelize.STRING
      },
      fail_count: {
        type: Sequelize.INTEGER,
        default:0
      },
      success_count: {
        type: Sequelize.INTEGER,
        default:0
      },
      reset_count:{
        type: Sequelize.INTEGER,
        default:0
      },
      attempt_count:{
        type: Sequelize.INTEGER,
        default:0
      },
      predecessor_class:{
        type: Sequelize.STRING
      },
      predecessor_class_id:{
        type: Sequelize.INTEGER
      },
      successor_class:{
        type: Sequelize.STRING
      },
      successor_class_id:{
        type: Sequelize.INTEGER
      },
      created_by:{
        type: Sequelize.STRING,
        default:'root'
      },
      launched_by:{
        type: Sequelize.STRING,
        default:'root'
      },
      retain:{
        type: Sequelize.BOOLEAN,
      },
      retention_days:{
        type:Sequelize.INTEGER
      }

    });
  
    return Task;
  };
  