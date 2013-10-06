$header
	<article>
		<header>
			<h2>
				<img src="templates/{$theme}/assets/img/icons/group_edit_big.png" alt="" />&nbsp;
				{$lng['admin']['admins']}&nbsp;({$admincount})
			</h2>
		</header>

		<section>

			<form action="{$linker->getLink(array('section' => 'admins'))}" method="post" enctype="application/x-www-form-urlencoded">

			<div class="overviewsearch">
				{$searchcode}
			</div>

			<if 15 < $count >
				<div class="overviewadd">
					<img src="templates/{$theme}/assets/img/icons/user_add.png" alt="" />&nbsp;
					<a href="{$linker->getLink(array('section' => 'admins', 'page' => $page, 'action' => 'add'))}">{$lng['admin']['admin_add']}</a>
				</div>
			</if>

			<table class="bradius">
			<thead>
				<tr>
					<th>
						{$lng['customer']['name']}&nbsp;{$arrowcode['name']}
					</th>
					<th>
						{$lng['login']['username']}&nbsp;{$arrowcode['loginname']}
					</th>
					<th>{$lng['admin']['customers']}</th>
					<th>&nbsp;</th>
					<th>{$lng['panel']['options']}</th>
				</tr>
			</thead>
			<if $pagingcode != ''>
				<tfoot>
					<tr>
						<td colspan="5">{$pagingcode}</td>
					</tr>
				</tfoot>
			</if>
			<tbody>
				$admins
			</tbody>
			</table>

			<p style="display:none;">
				<input type="hidden" name="s" value="$s" />
				<input type="hidden" name="page" value="$page" />
			</p>

			</form>

			<div class="overviewadd">
				<img src="templates/{$theme}/assets/img/icons/user_add.png" alt="" />&nbsp;
				<a href="{$linker->getLink(array('section' => 'admins', 'page' => $page, 'action' => 'add'))}">{$lng['admin']['admin_add']}</a>
			</div>

		</section>

	</article>
$footer

