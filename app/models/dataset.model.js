module.exports = (sequelize, Sequelize) => {
    const Dataset = sequelize.define("dataset", {
      short_name: {
        type: Sequelize.STRING,
      },
      long_name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      data_provider: {
        type: Sequelize.STRING,
      },
      data_source_url: {
        type: Sequelize.STRING,
      },
      data_download_url: {
        type: Sequelize.STRING,
      },
      login_credentials_required: {
        type: Sequelize.BOOLEAN,
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      API_key: {
        type: Sequelize.STRING,
      },
      download_method: {
        type: Sequelize.STRING,
      },
      download_file_prefix: {
        type: Sequelize.STRING,
      },
      download_file_infix: {
        type: Sequelize.STRING,
      },
      download_file_suffix: {
        type: Sequelize.STRING,
      },
      download_file_type: {
        type: Sequelize.STRING,
      },
      download_to_local_dir: {
        type: Sequelize.BOOLEAN,
      },
      local_directory_path: {
        type: Sequelize.STRING,
      },
      scp: {
        type: Sequelize.BOOLEAN,
      },
      scp_server_path: {
        type: Sequelize.STRING,
      },
      frequency_minutes: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      frequency_hours: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      frequency_days: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      frequency_months: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      frequency_years: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      check_minutes: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      check_hours: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      check_days: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      check_months: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      check_years: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      has_variables: {
        type: Sequelize.BOOLEAN,
      },
      variables: {
        type: Sequelize.STRING,
      },
      subset: {
        type: Sequelize.BOOLEAN,
      },
      xmin_xmax: {
        type: Sequelize.STRING,
      },
      ymin_ymax: {
        type: Sequelize.STRING,
      },
      create_latest: {
        type: Sequelize.BOOLEAN,
      },
      force_forecast:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      force_days:{
        type: Sequelize.INTEGER,
        defaultValue:0
      }
    });
    return Dataset;
}