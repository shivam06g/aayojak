// import React from 'react';
// import ReactDOM from 'react-dom';
import $ from 'jquery';


//   react code here

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});