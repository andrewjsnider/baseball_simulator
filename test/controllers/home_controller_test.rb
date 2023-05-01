require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  def test_get_home
    get root_url
    assert_response :success
  end
end
