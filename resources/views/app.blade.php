<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Laravel with Inertia</title>
		@vite
		@routes
	</head>
	<body class="antialiased bg-slate-200 dark:bg-slate-900">
		@inertia
	</body>
</html>
