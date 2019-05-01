function addItem(){
    $("#js-shopping-list-form").on("click", "button", function(e){
        e.preventDefault();
        let inputVal = $("#shopping-list-entry").val();
        // below if statement would be achieved better if I can revise HTML to make the field "required" but I cannot.
        if (inputVal !== "") {
            $(".shopping-list").append(
                `<li>
                    <span class="shopping-item">${inputVal}</span>
                    <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                    </div>
                </li>`)
            $("#shopping-list-entry").val("")
        }
    })
}

function markCheck(){
    $(".shopping-list").on("click", ".shopping-item-toggle", function(e){
        e.stopPropagation();
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    })
}

function deleteItem(){
    $(".shopping-list").on("click", ".shopping-item-delete", function(e){
        e.stopPropagation();
        $(this).closest("li").remove();
    })
}

$(addItem);
$(markCheck);
$(deleteItem);