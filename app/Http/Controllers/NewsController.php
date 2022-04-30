<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;


class NewsController extends Controller
{
    public function index()
    {
        $news = News::orderBy('id', 'desc')->with('user')->paginate(5);;
        return Inertia::render('news-page', [
            'news' => $news,
        ]);
    }

    public function adminIndex()
    {
        $news = News::orderBy('id', 'desc')->with('user')->paginate(10);
        return Inertia::render('admin/admin-news-page', [
            'news' => $news,
        ]);
    }

    public function create(Request $request)
    {
        $request->validate([
            'header' => 'required|string|max:64|unique:news,header',
            'content' => 'required|string|max:20000',
            'user_id' => 'required|exists:users,id',
        ]);

        $news = News::create([
            'header' => $request->header,
            'content' => $request->content,
            'user_id' => $request->user_id,
        ]);

        $news->save();

        return redirect(route('news.admin'))->with('success', 'Новость "' . $request->header .  '" успешно создана');
    }

    public function update(Request $request)
    {
        $request->validate([
            'news_id' => 'required|exists:news,id',
            'header' => 'required|string|max:64',
            'content' => 'required|string|max:20000',
        ]);

        $news = News::where('id', $request->news_id)->first();
        $news->header = $request->header;
        $news->content = $request->content;

        $news->save();

        return redirect(route('news.admin'))->with('success', 'Новость "' . $request->header .  '" успешно изменена!');
    }

    public function delete(Request $request)
    {
        $request->validate([
            'news_id' => 'required|exists:news,id',
        ]);

        $news = News::where('id', $request->news_id)->first();

        $news->delete();

        return redirect(route('news.admin'))->with('success', 'Новость "' . $request->header .  '" успешно удалена!');
    }
}
