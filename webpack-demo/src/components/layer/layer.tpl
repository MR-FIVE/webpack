<div class="layer">
    <img src="${ require('../../assets/man.gif') }" />
    <div> this a
        <%= name %> layer</div>
    <% for (let i = 0; i < arr.length; i++){ %>
        <li>
            <%= arr[i]%>
        </li>
        <% } %>
</div>
