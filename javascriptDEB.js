/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */
$(document).ready(function costCenterDropdown() {
    "use strict";
    var costCenterTxt = document.getElementById('ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter')
        , costCenterLbl = document.getElementById('ctl00_cphMainContent_ctlClearingUserData10005_lblCostCenter')
        , checkoutBtn = document.getElementById('ctl00_cphMainContentFooter_btnCheckout')
        , paymentDiv = document.getElementsByClassName("ClearingConfigCell")
        , newDiv1 = document.createElement('div')
        , newDiv2 = document.createElement('div')
        , newDiv3 = document.createElement('div');
    if (window.location.href.indexOf("CheckoutPaymentSubmission.aspx") > -1) {
        newDiv1.setAttribute("id", "newDiv1");
        newDiv2.setAttribute("id", "newDiv2");
        newDiv3.setAttribute("id", "newDiv3");
        costCenterLbl.style.display = 'none';
        costCenterTxt.style.display = 'none';
        newDiv1.innerHTML = ('<br><label style="padding-right:3px;" id="newLbl">Select Your Cost Center:</label><select id="mycc1" onchange="f1();"><option value="0"></option><option value="DEB Marketing - 4700055115">DEB Marketing - 4700055115</option><option value="Other">Other</option></select>');
        newDiv2.innerHTML = ('<br><label id="txtLbl">Please Enter your Cost Center: </label><input type="text" id="mycc2">');
        newDiv3.innerHTML = ('<br><a id="newbtnKH" onclick="END();">Confirm Cost Center</a>');
        paymentDiv[0].appendChild(newDiv1);
        paymentDiv[0].appendChild(newDiv2);
        paymentDiv[0].appendChild(newDiv3);
        newDiv2.style.display = 'none';
        checkoutBtn.style.display = 'none';
    }
});

function f1() {
    "use strict";
    var newLbl = document.getElementById('newLbl')
        , mycc1 = document.getElementById('mycc1')
        , newDiv2 = document.getElementById('newDiv2')
        , checkoutBtn = document.getElementById('ctl00_cphMainContentFooter_btnCheckout');
    if (window.location.href.indexOf("CheckoutPaymentSubmission.aspx") > -1) {
        checkoutBtn.style.display = 'none';
        if (mycc1.value == "Other") {
            newDiv2.style.display = 'block';
        }
        else if (mycc1.value != "Other") {
            newDiv2.style.display = 'none';
        }
    }
}

function END() {
    "use strict";
    var result1 = document.getElementById("mycc1")
        , result2 = document.getElementById("mycc2")
        , checkoutBtn = document.getElementById('ctl00_cphMainContentFooter_btnCheckout')
        , finalCC = document.getElementById("ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter");
    if (window.location.href.indexOf("CheckoutPaymentSubmission.aspx") > -1) {
        if (result1.value == "Other") {
            $('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter').val($('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter')).val(result2.value);
            if (result2.value.length === 0) {
                alert("You must enter a Cost Center");
                checkoutBtn.style.display = 'none'
            }
            else {
                checkoutBtn.style.display = 'block';
            }
        }
        else if (result1.value == "DEB Marketing - 4700055115") {
            $('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter').val($('#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter')).val(result1.value);
            checkoutBtn.style.display = 'block';
        }
        else if (result1.value == "0") {
            checkoutBtn.style.display = 'none';
            alert("Please Select an option from the Cost Center Dropdown.")
        }
    }
}