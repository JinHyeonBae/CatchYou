import React from "react";

function Sidebar() {
  return (
    <div className="sidenav-list">
      <ul className="navbar">
        <li>
          <a href="index.html">
            <i className="icon flaticon-home" />{" "}
            <span>
              <i className="flaticon-home" /> Home
            </span>
          </a>
        </li>
        <li>
          <a href="course-lesson.html">
            <i className="icon flaticon-book" />{" "}
            <span>
              <i className="flaticon-book" />
              Course Lesson
            </span>
          </a>
        </li>
        <li>
          <a href="category.html">
            <i className="icon flaticon-test" />{" "}
            <span>
              <i className="flaticon-test" />
              Categories
            </span>
          </a>
        </li>
        <li>
          <a href="dashboard.html">
            <i className="icon flaticon-report" />{" "}
            <span>
              <i className="flaticon-report" />
              Dashboard
            </span>
          </a>
        </li>
        <li>
          <a href="manage-course.html">
            <i className="icon flaticon-test" />{" "}
            <span>
              <i className="flaticon-test" />
              Manage Course
            </span>
          </a>
        </li>
        <li>
          <a href="earning.html">
            <i className="icon flaticon-pie-chart-1" />{" "}
            <span>
              <i className="flaticon-pie-chart-1" />
              Earning
            </span>
          </a>
        </li>
        <li>
          <a href="enrolled-courses.html">
            <i className="icon flaticon-file" />{" "}
            <span>
              <i className="flaticon-file" />
              Enrolled Courses
            </span>
          </a>
        </li>
        <li>
          <a href="certificate.html">
            <i className="icon flaticon-new-window" />{" "}
            <span>
              <i className="flaticon-new-window" />
              Certificate
            </span>
          </a>
        </li>
        <li>
          <a href="team.html">
            <i className="icon flaticon-file" />{" "}
            <span>
              <i className="flaticon-file" />
              Instructors
            </span>
          </a>
        </li>
        <li>
          <a href="contact.html">
            <i className="icon flaticon-contact" />{" "}
            <span>
              <i className="flaticon-contact" />
              Contact Us
            </span>
          </a>
        </li>
        <li>
          <a href="help.html">
            <i className="icon flaticon-information" />{" "}
            <span>
              <i className="flaticon-information" />
              Help
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
