var inviteBTN = document.getElementsByClassName("uiButtonText"),
    friendsName = document.getElementsByClassName("text");
if (inviteBTN.length > 0) {
    var ConfirmSelection = confirm('Are you sure you want to select ' + inviteBTN.length + ' friends ?\n(this may take a while)')

    if (ConfirmSelection) {

        //find all invite buttons and click them
        for (i = 0; i < inviteBTN.length; i++) {
            //  inviteBTN[i].click();	//click the invite button
        }
        console.log(inviteBTN.length + ' total friends invited')
        alert(inviteBTN.length + ' total friends invited')
    } else {
        console.log('User canceled selection')
    }
}
else
{
    alert('Cannot select friends!!\nPlease go to your page and click "invite friends to like page"')
}