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
      frequency_type: {
        type: Sequelize.STRING,
      },
      frequency_count: {
        type: Sequelize.INTEGER,
      },
      check_every_type: {
        type: Sequelize.STRING,
      },
      check_count: {
        type: Sequelize.INTEGER,
      },
      variables: {
        type: Sequelize.STRING,
      },
      subset: {
        type: Sequelize.BOOLEAN,
      },
      subset_region: {
        type: Sequelize.STRING,
      },
      is_subset_auto: {
        type: Sequelize.BOOLEAN,
      },
    });
    return Dataset;
}