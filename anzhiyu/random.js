var posts=["my_resume/","hexo_new/","ChinaIsTheBest/","Graduate_/","Leetcode_once_day/","ur5_vrep_simu/","Graduate_2/","leetcode_top_100/","cpp_learning/","data_structure/","cpp_learning/","interviewing/","Leetcode_group/","HuaWei_no_way/","cpp_learning/","point_cloud_pcl/","digital_image_process/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};